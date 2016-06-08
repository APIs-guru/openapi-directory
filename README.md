![banner]

[![APIs in collection][numApis-image]][apisDir-link]
[![OpenAPI specs][numSpecs-image]][apisDir-link]
[![Endpoints][endpoints-image]][apisDir-link]
[![Chat on gitter][gitter-image]][gitter-link]

[![Share on Twitter][twitter-image]][twitter-link]
[![Follow on Twitter][twitterFollow-image]][twitterFollow-link]

Repository for API models in [OpenAPI(aka Swagger)](https://openapis.org) [2.0](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) format.<BR>
API access to collection: [Go!](API.md)

[![Add API][addAPI-image]][addAPI-link]

Our goal is to create a machine-readable Wikipedia for REST APIs with the following principals:
- Open source, community driven project.
- Only publicly available APIs (free or paid).
- Anyone can add or change an API, not only API owners.
- All data can be accessed through a [REST API](API.md).

If you want to reference this project and you need an icon or even a banner, check our [branding guide](https://github.com/APIs-guru/branding).

Also, we provide services and consultancy around the Swagger spec and REST APIs in general.
You can contact us at founders@apis.guru.

What does APIs.guru do?
--------------------------
* Filter out private and non-reliable APIs.
* [Convert](https://github.com/lucybot/api-spec-converter) different formats into OpenAPI(fka Swagger) 2.0
* Fix mistakes, ~80% of spec have some
* Add additional data, like: logo, categories, …
* Update specs on daily basis

Update procedure
--------------------------
All specs are automatically updated from their original source.
You can see it under `x-origin` property inside [each](https://github.com/APIs-guru/api-models/search?utf8=%E2%9C%93&q=x-origin+filename%3Aswagger.yaml) of `swagger.yaml` files.
I run update script every day and manually check diffs before commit.
If you see some API is not updated for more that 48 hours please open [an issue](https://github.com/APIs-guru/api-models/issues/new).

Existing integrations
--------------------------
 - https://any-api.com - Documentation and Test Consoles for Public APIs
 - [https://sdks.io](https://sdks.io/Search/FindSDKs?Bridge=APIs.guru) - Explore Automatically Generated SDKs
 - [https://cenit.io](https://cenit.io/directory?spec=swagger) - Data integration platform
 - [commandcar](https://github.com/tikalk/commandcar#installing-from-api-models) - Curl on steroids
 - https://datafire.io - allows you to process and transfer data between APIs, databases, and more
 - [Material Swagger UI Hub](https://darosh.github.io/angular-swagger-ui-material/hub/) - testing and exploring hub for Material Swagger UI demo
 - [Paw](https://luckymarmot.com/paw) - The most powerful HTTP client for Mac - You can import definitions and directly play with the APIs, [see how](https://luckymarmot.com/paw/doc/examples/search-apis).

Also used as test suite in following projects:
 - [swagger-parser](https://github.com/BigstickCarpet/swagger-parser) - Swagger 2.0 parser and validator for Node and browsers
 - [SwaggerProvider](https://github.com/sergey-tihon/SwaggerProvider) - F# Type Provider for Swagger
 - [ReDoc](https://github.com/Rebilly/ReDoc) - Swagger-generated API Reference Documentation
 - [ardoq-swagger-addon](https://github.com/ardoq/ardoq-swagger-addon) - Ardoq Open API (Swagger) Addon

API spec acceptance criteria
--------------------------
* Public - anyone can access it as long as they follow some clearly defined steps (email owner, pay money, etc.).
* Persistant - API is made with long-lived goal, and not for a particular event (conference, hackathon, etc.).
* Useful - API could provide useful functionality not only for its owner.

Integration with 3rd-party services
--------------------------
We discourage you from using Github RAW links or Git directly, repository structure isn't stable and could be changed in future.
Instead, we strongly recomend you to use our [REST API](API.md).

Licenses
--------------------------
All code is released under the [MIT](http://opensource.org/licenses/MIT) licence.<br>
All API specs contributed to project by authors is covered by the [CC01.0](https://creativecommons.org/publicdomain/zero/1.0/) license.<br>
All API specs acquired from public sources under the [Fair use](http://en.wikipedia.org/wiki/Fair_use) principal.

Spec sources
--------------------------
Some specs are taken from Open Source projects:
 - [warehouseman/trello-swagger-generator](https://github.com/warehouseman/trello-swagger-generator/) - OpenAPI(aka Swagger) spec for Trello API
 - [darklynx/swagger-api-collection](https://github.com/darklynx/swagger-api-collection) - OpenAPI(aka Swagger) spec for Instagram API
 - [Mermade/bbcparse](https://github.com/Mermade/bbcparse) - OpenAPI(aka Swagger) spec for BBC Nitro API

[banner]: https://apis.guru/branding/banner.svg "APIs.guru"
[twitter-image]: https://img.shields.io/twitter/url/http/APIs.guru.svg?style=social
[twitter-link]: https://twitter.com/intent/tweet?text=http%3A%2F%2FAPIs.guru%20-%20Wikipedia%20for%20%23Web%20%23APIs%20by%20@APIs_guru%20pic.twitter.com/UhlhbMw1NP
[twitterFollow-image]: https://img.shields.io/twitter/follow/APIs_guru.svg?style=social
[twitterFollow-link]: https://twitter.com/intent/follow?screen_name=APIs_guru
[gitter-image]: https://img.shields.io/gitter/room/APIs-guru/api-models.svg
[gitter-link]: https://gitter.im/APIs-guru/api-models
[numApis-image]: https://api.apis.guru/badges/apis_in_collection_banner.svg
[numSpecs-image]: https://api.apis.guru/badges/openapi_specs_banner.svg
[endpoints-image]: https://api.apis.guru/badges/endpoints_banner.svg
[apisDir-link]: ./APIs
[addAPI-image]: https://cloud.githubusercontent.com/assets/8336157/15861614/7e31511a-2cd5-11e6-8b79-38ad0f61e598.png
[addAPI-link]: https://apis.guru/add-api/
