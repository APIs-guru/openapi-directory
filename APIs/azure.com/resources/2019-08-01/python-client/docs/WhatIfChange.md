# WhatIfChange

Information about a single resource change predicted by What-If operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **object** | The predicted snapshot of the resource after the deployment is executed. | [optional] 
**before** | **object** | The snapshot of the resource before the deployment is executed. | [optional] 
**change_type** | **str** | Type of change that will be made to the resource when the deployment is executed. | 
**delta** | [**List[WhatIfPropertyChange]**](WhatIfPropertyChange.md) | The predicted changes to resource properties. | [optional] 
**resource_id** | **str** | Resource ID | 

## Example

```python
from openapi_client.models.what_if_change import WhatIfChange

# TODO update the JSON string below
json = "{}"
# create an instance of WhatIfChange from a JSON string
what_if_change_instance = WhatIfChange.from_json(json)
# print the JSON string representation of the object
print(WhatIfChange.to_json())

# convert the object into a dict
what_if_change_dict = what_if_change_instance.to_dict()
# create an instance of WhatIfChange from a dict
what_if_change_from_dict = WhatIfChange.from_dict(what_if_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


