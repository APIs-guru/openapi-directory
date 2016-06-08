**Warning**: If you want to be notified about changes in advance please subscribe to our [Gitter channel](https://gitter.im/APIs-guru/api-models).

## Implementation
This API implemented as `gh-pages` branch and Github automatically mirror it's content to<BR> https://api.apis.guru/v2/<BR>
That mean API served as static content and support both caching and compression.<BR>

## Client examples
Here is simplest possible API client: [[Demo]](https://apis.guru/simple-ui) [[Repo]](https://github.com/APIs-guru/simple-ui)<BR>
Example of more advanced UI: [[Demo]](https://apis.guru) [[Repo]](https://github.com/APIs-guru/APIs-guru.github.io)

## Endpoint
https://api.apis.guru/v2/list.json - List all API specs.
It consist of JSON object with API IDs(`<provider>[:<service>]`) as keys.
Values have following are objects with following attributes:
 - `added` - Timestamp when this API was first added to collection.
 - `preferred` - recommended version.
 - `version` - map of version to their descriptions:
    - `added` - Timestamp when this version was added
    - `info` - Copy of `info` section from Swagger spec
    - `swaggerUrl` - URL of Swagger spec
    - `swaggerYamlUrl` - URL of Swagger spec in YAML format
    - `updated` - Timestamp when this version was updated
 
For example:
```json
{
  "googleapis.com:drive": {
    "added": "2015-08-16T17:36:25.000Z",
    "preferred": "v2",
    "versions": {
      "v1": {
        "added": "2015-08-16T17:36:25.000Z",
        "info": {
          "title": "Drive API",
          ...
        },
        "swaggerUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v1/swagger.json",
        "swaggerYamlUrl": "https://api.apis.guru/v2/specs/googleapis.com/drive/v1/swagger.yaml",
        "updated": "2015-08-28T20:44:24.000Z"
      },
      "v2": {
        "added": "2015-08-16T17:36:25.000Z",
        ...
      }
    }
  },
  ...
}
```
