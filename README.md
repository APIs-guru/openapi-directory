![logo]

[![APIs in collection][numApis-image]][numApis-link]
[![Chat on gitter][gitter-image]][gitter-link]

[![Share on Twitter][twitter-image]][twitter-link]
[![Follow on Twitter][twitterFollow-image]][twitterFollow-link]

Repository for API models in [Swagger](http://swagger.io/) [2.0](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md) format

Our goal is to create a machine-readable Wikipedia for REST APIs, with the following principals:
- Open source, community driven project
- Only publicly available APIs (free or paid).
- Anyone can add or change an API, not only API owners.
- All data can be accessed through a [REST API](API.md).

If you want to reference this project and you need an icon or even a banner, check our [branding guide](branding/README.md).

Also, we provide services and consultancy around the Swagger spec and REST APIs in general.
You can contact us at founders@apis.guru.

Existing integrations
--------------------------
 - https://any-api.com - Documentation and Test Consoles for Public APIs
 - [https://sdks.io](https://sdks.io/Search/FindSDKs?Bridge=APIs.guru) - Explore Automatically Generated SDKs
 - [http://www.cenit.io](http://www.cenit.io/directory?spec=swagger) - Social Data and Business Integration platform
 - [commandcar](https://github.com/tikalk/commandcar#installing-from-api-models) - Curl on steroids
 - https://datafire.io - allows you to process and transfer data between APIs, databases, and more

Also used as test suite in following projects:
 - [swagger-parser](https://github.com/BigstickCarpet/swagger-parser) - Swagger 2.0 parser and validator for Node and browsers
 - [SwaggerProvider](https://github.com/sergey-tihon/SwaggerProvider) - F# Type Provider for Swagger

API spec acceptance criteria
--------------------------
* Public - anyone can access it as long as they follow some clearly defined steps (email owner, pay money, etc.).
* Persistant - API is made with long-lived goal, and not for a particular event (conference, hackathon, etc.).
* Useful - API could provide useful functionality not only for its owner.

Future additions
--------------------------
We are currently working on adding many new API specs, you can see the full list inside [this](https://docs.google.com/spreadsheets/d/14zxKcW_Pzu5aYI3Tnwe5ph2Ru2pkSP8yHWEQhx3t8pI/edit?usp=sharing) document.<BR>
If you have an API spec in any format (Swagger, RAML, WADL, ...) for any public API, please feel free to open an [issue](https://github.com/APIs-guru/api-models/issues/new).

Integration with 3rd-party services
--------------------------
We discourage you from using Github RAW links or Git directly, repository structure isn't stable and could be changed in future.
Instead, we strongly recomend you to use our [REST API](API.md).<BR>
In case if you really need it, we also support [APIs.json](http://apisjson.org/) format:<BR>
https://apis-guru.github.io/api-models/apis.json

Licenses
--------------------------
All code is released under the [MIT](http://opensource.org/licenses/MIT) licence.<br>
All API specs contributed to project by authors is covered by the [CC01.0](https://creativecommons.org/publicdomain/zero/1.0/) license.<br>
All API specs acquired from public sources under the [Fair use](http://en.wikipedia.org/wiki/Fair_use) principal.

Spec sources
--------------------------
Some specs are taken from Open Source projects:
 - [trello-swagger-generator](https://github.com/warehouseman/trello-swagger-generator/) - Swagger spec for Trello API
 - [https://github.com/darklynx/swagger-api-collection](https://github.com/darklynx/swagger-api-collection) - Swagger spec for Instagram API

[logo]: https://apis-guru.github.io/api-models/branding/logo_horizontal.svg "APIs.guru"
[twitter-image]: https://img.shields.io/twitter/url/http/APIs.guru.svg?style=social
[twitter-link]: https://twitter.com/intent/tweet?text=http%3A%2F%2FAPIs.guru%20-%20Wikipedia%20for%20%23Web%20%23APIs%20pic.twitter.com/UhlhbMw1NP
[twitterFollow-image]: https://img.shields.io/twitter/follow/APIs_guru.svg?style=social
[twitterFollow-link]: https://twitter.com/intent/follow?screen_name=APIs_guru
[gitter-image]: https://img.shields.io/gitter/room/APIs-guru/api-models.svg
[gitter-link]: https://gitter.im/APIs-guru/api-models
[numApis-image]: https://apis-guru.github.io/api-models/apis_in_collection_banner.svg
[numApis-link]: ./APIs
