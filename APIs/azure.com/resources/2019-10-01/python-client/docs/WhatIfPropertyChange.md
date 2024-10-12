# WhatIfPropertyChange

The predicted change to the resource property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **object** | The value of the property after the deployment is executed. | [optional] 
**before** | **object** | The value of the property before the deployment is executed. | [optional] 
**children** | [**List[WhatIfPropertyChange]**](WhatIfPropertyChange.md) | Nested property changes. | [optional] 
**path** | **str** | The path of the property. | 
**property_change_type** | **str** | The type of property change. | 

## Example

```python
from openapi_client.models.what_if_property_change import WhatIfPropertyChange

# TODO update the JSON string below
json = "{}"
# create an instance of WhatIfPropertyChange from a JSON string
what_if_property_change_instance = WhatIfPropertyChange.from_json(json)
# print the JSON string representation of the object
print(WhatIfPropertyChange.to_json())

# convert the object into a dict
what_if_property_change_dict = what_if_property_change_instance.to_dict()
# create an instance of WhatIfPropertyChange from a dict
what_if_property_change_from_dict = WhatIfPropertyChange.from_dict(what_if_property_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


