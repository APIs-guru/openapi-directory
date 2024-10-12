# PubSubIODetails

Metadata for a Pub/Sub connector used by the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | **str** | Subscription used in the connection. | [optional] 
**topic** | **str** | Topic accessed in the connection. | [optional] 

## Example

```python
from openapi_client.models.pub_sub_io_details import PubSubIODetails

# TODO update the JSON string below
json = "{}"
# create an instance of PubSubIODetails from a JSON string
pub_sub_io_details_instance = PubSubIODetails.from_json(json)
# print the JSON string representation of the object
print(PubSubIODetails.to_json())

# convert the object into a dict
pub_sub_io_details_dict = pub_sub_io_details_instance.to_dict()
# create an instance of PubSubIODetails from a dict
pub_sub_io_details_from_dict = PubSubIODetails.from_dict(pub_sub_io_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


