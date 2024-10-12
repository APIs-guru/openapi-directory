# ResourceRecordSet

A unit of data that is returned by the DNS servers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#resourceRecordSet']
**name** | **str** | For example, www.example.com. | [optional] 
**routing_policy** | [**RRSetRoutingPolicy**](RRSetRoutingPolicy.md) |  | [optional] 
**rrdatas** | **List[str]** | As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) -- see examples. | [optional] 
**signature_rrdatas** | **List[str]** | As defined in RFC 4034 (section 3.2). | [optional] 
**ttl** | **int** | Number of seconds that this ResourceRecordSet can be cached by resolvers. | [optional] 
**type** | **str** | The identifier of a supported record type. See the list of Supported DNS record types. | [optional] 

## Example

```python
from openapi_client.models.resource_record_set import ResourceRecordSet

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceRecordSet from a JSON string
resource_record_set_instance = ResourceRecordSet.from_json(json)
# print the JSON string representation of the object
print(ResourceRecordSet.to_json())

# convert the object into a dict
resource_record_set_dict = resource_record_set_instance.to_dict()
# create an instance of ResourceRecordSet from a dict
resource_record_set_from_dict = ResourceRecordSet.from_dict(resource_record_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


