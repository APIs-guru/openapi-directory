**Warning**: this API is in **ALPHA** stage and subject to changes.<br>
If you want to be notified about changes in advance please send us email to founders@APIs.guru

This API implemented as `gh-pages` branch Github automatically mirror it's content to https://apis-guru.github.io/api-models/

http://apis-guru.github.io/api-models/apilist.json - List all API specs in JSON format.
`api` property is an array consting of path alement to Swagger files.
For example:
```json
{
  "api": [
    ["gettyimages.com","3.0"],
    ["googleapis.com","youtube","v3"]
  ]
}
```
To get URL for a spec you should concat all path elemement with `/` as separator and append `swagger.json`.<br>
So link from previous example would be:<br>
https://apis-guru.github.io/api-models/gettyimages.com/3.0/swagger.json<br>
https://apis-guru.github.io/api-models/googleapis.com/youtube/v3/swagger.json<br>
