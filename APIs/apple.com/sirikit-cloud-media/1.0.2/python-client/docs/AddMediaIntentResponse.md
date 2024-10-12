# AddMediaIntentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_class** | **str** |  | 
**code** | [**AddMediaIntentResponseCode**](AddMediaIntentResponseCode.md) |  | 

## Example

```python
from openapi_client.models.add_media_intent_response import AddMediaIntentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddMediaIntentResponse from a JSON string
add_media_intent_response_instance = AddMediaIntentResponse.from_json(json)
# print the JSON string representation of the object
print(AddMediaIntentResponse.to_json())

# convert the object into a dict
add_media_intent_response_dict = add_media_intent_response_instance.to_dict()
# create an instance of AddMediaIntentResponse from a dict
add_media_intent_response_from_dict = AddMediaIntentResponse.from_dict(add_media_intent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


