# Contributing

First of all, thank you for considering making a contribution to the project.

## Adding an API

To add an API to the collection, there must be a machine-readable API description in a format which is or can be converted to OpenAPI (Swagger). These include RAML, API Blueprint, IO Docs, WADL and Google Discovery Format.

First please check that the API you wish to add isn't already in the collection. You can
browse the APIs in [GitHub](https://github.com/APIs-guru/openapi-directory/tree/master/APIs) or on the [APIs.guru](https://apis.guru/browse-apis/) website.

Please also check the API isn't in the process of being added, by checking the [list of open issues](https://github.com/APIs-guru/openapi-directory/issues).

The API should meet the following critera:

* Public - anyone can access it as long as they follow some clearly defined steps (subscribe, pay fees, etc.).
* Persistant - API is made with long-lived goal, and not for a particular event (conference, hackathon, etc.).
* Useful - API should provide useful functionality not only for its owner.

The easiest way to request an API to be added is to use the [web form](https://apis.guru/add-api/).

### Adding an API via a Pull-Request

Clone the repo locally, if you haven't already done so, and run the following

* create a new branch for the PR
* change into the APIs directory
* run `../scripts/collection add -c {category} [-l {logo-url}|-t {twitter handle}] {format} {url-to-definition}`

Run `../scripts/collection add --help` for a complete list of options.

`{category}` should be one of the values from [/resources/categories.yaml](/resources/categories.yaml), and `{format}` be one of:

  * `openapi_3`
  * `swagger_2`
  * `swagger_1`
  * `api_blueprint`
  * `raml`
  * `io_docs`
  * `google`
  * `wadl`

If your API definition is unofficial, also specify the `--unofficial` flag.

If there are no validation errors:

* commit your change (including any `patch.yaml` created)
* push your change
* create a Pull Request

## Amending an API definition

### Adding information

If you wish to only add information to the API definition, such as a description, category, logo, tag etc, you can amend the `patch.yaml` file found in the API's directory. The file is merged with the `swagger.yaml` or `openapi.yaml` file, so the structure should follow that of an OpenAPI definition, including only those properties necessary to place your addition correctly.

For example:

```yaml
info:
  description: Our unified API brings together data across all modes of transport into a single RESTful API. This API provides access to the most highly requested realtime and status infomation across all the modes of transport, in a single and consistent way. Access to the developer documentation is available at https://api.tfl.gov.uk
  x-logo:
    url: 'https://pbs.twimg.com/profile_images/773531056670646272/dsuVeVSg.jpg'
  x-apisguru-categories:
    - location
    - open_data
```

Please issue a Pull Request, it is not necessary to raise an Issue as well.

### Changing / Fixing an API definition

First please see if you can make your fix upstream with the owner of the API definition, this benefits everyone and is less work than maintaining patches.

Check the `info.contact` section of the API definition or the `x-origin` to see if there is an email or Twitter contact, or a GitHub repository you can contribute to.

#### Do not amend swagger/openapi.yaml files directly

If you do this, your changes will be overwritten the next time the API update scripts are run.

The exception to this are APIs.guru-specific specification extensions (aka vendor extensions). Some of these are round-tripped between the modified API definitions on each update.

These extensions are [documented in the Wiki](https://github.com/APIs-guru/openapi-directory/wiki/specification-extensions#apisguru-extensions).

#### Creating a fixup.yaml patch

To do this, you will need to fork the repository and clone your fork locally.

These instructions should work on Linux or other Unix variants, MacOSx and Windows using the Git for Windows shell.

Create a new branch off master using the command:

`git checkout -b {new-branch-name}`

Change into the `APIs` directory.

Ensure your `EDITOR` environment variable is set to a terminal editor such as vi or emacs.

Issue the command `node ../scripts/collection fixup {path/to/swagger.yaml}`

Edit the `swagger.yaml` or `openapi.yaml` file and save.

Issue the command `node ../scripts/collection update {directory-name}` to reprocess the definition from source.

As long as there are no errors...

Commit your change with an informative commit message, and push to the new branch on your fork.

Create a Pull Request on GitHub.
