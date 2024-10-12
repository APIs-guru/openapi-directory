# DeliverInfo

Details of the final state \"deliver\" and associated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | IP address of the target (if applicable). | [optional] 
**resource_uri** | **str** | URI of the resource that the packet is delivered to. | [optional] 
**target** | **str** | Target type where the packet is delivered to. | [optional] 

## Example

```python
from openapi_client.models.deliver_info import DeliverInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeliverInfo from a JSON string
deliver_info_instance = DeliverInfo.from_json(json)
# print the JSON string representation of the object
print(DeliverInfo.to_json())

# convert the object into a dict
deliver_info_dict = deliver_info_instance.to_dict()
# create an instance of DeliverInfo from a dict
deliver_info_from_dict = DeliverInfo.from_dict(deliver_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


