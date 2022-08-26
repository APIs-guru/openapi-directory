# Contributing

First of all, thank you for considering making a contribution to the project.

## Adding an API

To add an API to the collection, there must be a machine-readable API description in a format which is or can be converted to OpenAPI (formerly known as Swagger). These include RAML, API Blueprint, Postman Collections, Google Discovery Format, WADL and IO Docs.

First please check that the API you wish to add isn't already in the collection. You can
browse the APIs in [GitHub](https://github.com/APIs-guru/openapi-directory/tree/main/APIs) or on the [APIs.guru](https://apis.guru/) website.

Please also check the API isn't in the process of being added, by checking the [list of open issues](https://github.com/APIs-guru/openapi-directory/issues).

The API should meet the following criteria:

* Public - anyone can access it as long as they follow some clearly defined steps (subscribe, pay fees, etc.).
* Persistent - API is made with long-lived goal, and not for a particular event (conference, hackathon, etc.).
* Useful - API should provide useful functionality not only for its owner.

The process to request an API to be added is to use the [web form](https://apis.guru/add-api/).

## Amending an API definition

### Adding information

If you wish to only add information to the API definition, such as a description, category, logo, tag etc, please raise an issue with the relevant details.

### Changing / Fixing an API definition

First please see if you can make your fix upstream with the owner of the API definition, this benefits everyone and is less work than maintaining patches.

Check the `info.contact` section of the API definition or the `x-origin` to see if there is an email or Twitter contact, or a GitHub repository you can contribute to.

#### Do not raise PRs to amend the openapi/swagger.yaml files directly

If you do this, your changes would be overwritten the next time the API update scripts are run. Such PRs will be closed.

#### If you want to run our API registry (add/update/validate/repair functions) locally

Please contact us for details.

