# Port

A port resource represents a server port on a machine. The port may be actively *monitored*, i.e., a Dependency Agent is running on its machine, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. A port is live during an interval of time, if that port had associated activity during (parts) of that interval.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Resource properties. | [optional] 
**etag** | **str** | Resource ETAG. | [optional] 
**kind** | **str** | Additional resource type qualifier. | 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.port import Port

# TODO update the JSON string below
json = "{}"
# create an instance of Port from a JSON string
port_instance = Port.from_json(json)
# print the JSON string representation of the object
print(Port.to_json())

# convert the object into a dict
port_dict = port_instance.to_dict()
# create an instance of Port from a dict
port_from_dict = Port.from_dict(port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


