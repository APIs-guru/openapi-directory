# Custom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**custom** | **Dict[str, object]** | A custom payload, which is passed directly to WhatsApp for certain features such as templates and interactive messages. The schema of a custom object can vary widely. [Read more about Custom Objects](https://developer.vonage.com/messages/concepts/custom-objects). | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;custom&#x60; in this field | 

## Example

```python
from openapi_client.models.custom import Custom

# TODO update the JSON string below
json = "{}"
# create an instance of Custom from a JSON string
custom_instance = Custom.from_json(json)
# print the JSON string representation of the object
print(Custom.to_json())

# convert the object into a dict
custom_dict = custom_instance.to_dict()
# create an instance of Custom from a dict
custom_from_dict = Custom.from_dict(custom_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


