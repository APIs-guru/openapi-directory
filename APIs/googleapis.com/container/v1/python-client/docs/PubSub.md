# PubSub

Pub/Sub specific notification config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable notifications for Pub/Sub. | [optional] 
**filter** | [**Filter**](Filter.md) |  | [optional] 
**topic** | **str** | The desired Pub/Sub topic to which notifications will be sent by GKE. Format is &#x60;projects/{project}/topics/{topic}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.pub_sub import PubSub

# TODO update the JSON string below
json = "{}"
# create an instance of PubSub from a JSON string
pub_sub_instance = PubSub.from_json(json)
# print the JSON string representation of the object
print(PubSub.to_json())

# convert the object into a dict
pub_sub_dict = pub_sub_instance.to_dict()
# create an instance of PubSub from a dict
pub_sub_from_dict = PubSub.from_dict(pub_sub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


