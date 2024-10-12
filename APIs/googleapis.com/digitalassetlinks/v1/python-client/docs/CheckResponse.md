# CheckResponse

Response message for the CheckAssetLinks call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_string** | **str** | Human-readable message containing information intended to help end users understand, reproduce and debug the result. The message will be in English and we are currently not planning to offer any translations. Please note that no guarantees are made about the contents or format of this string. Any aspect of it may be subject to change without notice. You should not attempt to programmatically parse this data. For programmatic access, use the error_code field below. | [optional] 
**error_code** | **List[str]** | Error codes that describe the result of the Check operation. | [optional] 
**linked** | **bool** | Set to true if the assets specified in the request are linked by the relation specified in the request. | [optional] 
**max_age** | **str** | From serving time, how much longer the response should be considered valid barring further updates. REQUIRED | [optional] 

## Example

```python
from openapi_client.models.check_response import CheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckResponse from a JSON string
check_response_instance = CheckResponse.from_json(json)
# print the JSON string representation of the object
print(CheckResponse.to_json())

# convert the object into a dict
check_response_dict = check_response_instance.to_dict()
# create an instance of CheckResponse from a dict
check_response_from_dict = CheckResponse.from_dict(check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


