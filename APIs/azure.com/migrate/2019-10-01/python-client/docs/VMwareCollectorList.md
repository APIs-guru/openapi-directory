# VMwareCollectorList

List of VMware collectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VMwareCollector]**](VMwareCollector.md) | List of VMware collectors. | [optional] 

## Example

```python
from openapi_client.models.v_mware_collector_list import VMwareCollectorList

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCollectorList from a JSON string
v_mware_collector_list_instance = VMwareCollectorList.from_json(json)
# print the JSON string representation of the object
print(VMwareCollectorList.to_json())

# convert the object into a dict
v_mware_collector_list_dict = v_mware_collector_list_instance.to_dict()
# create an instance of VMwareCollectorList from a dict
v_mware_collector_list_from_dict = VMwareCollectorList.from_dict(v_mware_collector_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


