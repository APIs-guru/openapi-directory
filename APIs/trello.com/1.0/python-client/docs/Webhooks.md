# Webhooks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **str** |  true or false | [optional] 
**callback_url** | **str** | A valid URL that is reachable with a HEAD request | [optional] 
**description** | **str** | a string with a length from 0 to 16384 | [optional] 
**id_model** | **str** | id of the model that should be hooked | [optional] 

## Example

```python
from openapi_client.models.webhooks import Webhooks

# TODO update the JSON string below
json = "{}"
# create an instance of Webhooks from a JSON string
webhooks_instance = Webhooks.from_json(json)
# print the JSON string representation of the object
print(Webhooks.to_json())

# convert the object into a dict
webhooks_dict = webhooks_instance.to_dict()
# create an instance of Webhooks from a dict
webhooks_from_dict = Webhooks.from_dict(webhooks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


