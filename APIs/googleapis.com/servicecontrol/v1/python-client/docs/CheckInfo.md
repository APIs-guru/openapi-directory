# CheckInfo

Contains additional information about the check operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key_uid** | **str** | The unique id of the api key in the format of \&quot;apikey:\&quot;. This field will be populated when the consumer passed to Chemist is an API key and all the API key related validations are successful. | [optional] 
**consumer_info** | [**ConsumerInfo**](ConsumerInfo.md) |  | [optional] 
**unused_arguments** | **List[str]** | A list of fields and label keys that are ignored by the server. The client doesn&#39;t need to send them for following requests to improve performance and allow better aggregation. | [optional] 

## Example

```python
from openapi_client.models.check_info import CheckInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CheckInfo from a JSON string
check_info_instance = CheckInfo.from_json(json)
# print the JSON string representation of the object
print(CheckInfo.to_json())

# convert the object into a dict
check_info_dict = check_info_instance.to_dict()
# create an instance of CheckInfo from a dict
check_info_from_dict = CheckInfo.from_dict(check_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


