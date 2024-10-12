# CheckPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | [**CheckPost200ResponseLanguage**](CheckPost200ResponseLanguage.md) |  | [optional] 
**matches** | [**List[CheckPost200ResponseMatchesInner]**](CheckPost200ResponseMatchesInner.md) |  | [optional] 
**software** | [**CheckPost200ResponseSoftware**](CheckPost200ResponseSoftware.md) |  | [optional] 

## Example

```python
from openapi_client.models.check_post200_response import CheckPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CheckPost200Response from a JSON string
check_post200_response_instance = CheckPost200Response.from_json(json)
# print the JSON string representation of the object
print(CheckPost200Response.to_json())

# convert the object into a dict
check_post200_response_dict = check_post200_response_instance.to_dict()
# create an instance of CheckPost200Response from a dict
check_post200_response_from_dict = CheckPost200Response.from_dict(check_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


