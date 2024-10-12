# VMwareCollector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**properties** | [**CollectorProperties**](CollectorProperties.md) |  | [optional] 
**type** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.v_mware_collector import VMwareCollector

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCollector from a JSON string
v_mware_collector_instance = VMwareCollector.from_json(json)
# print the JSON string representation of the object
print(VMwareCollector.to_json())

# convert the object into a dict
v_mware_collector_dict = v_mware_collector_instance.to_dict()
# create an instance of VMwareCollector from a dict
v_mware_collector_from_dict = VMwareCollector.from_dict(v_mware_collector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


