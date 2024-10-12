# GenerateSsoUrlResult

Generate SSO Url operations response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Redirect Url containing the SSO URL value. | [optional] 

## Example

```python
from openapi_client.models.generate_sso_url_result import GenerateSsoUrlResult

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateSsoUrlResult from a JSON string
generate_sso_url_result_instance = GenerateSsoUrlResult.from_json(json)
# print the JSON string representation of the object
print(GenerateSsoUrlResult.to_json())

# convert the object into a dict
generate_sso_url_result_dict = generate_sso_url_result_instance.to_dict()
# create an instance of GenerateSsoUrlResult from a dict
generate_sso_url_result_from_dict = GenerateSsoUrlResult.from_dict(generate_sso_url_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


