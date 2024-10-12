# WhatIfOperationProperties

Deployment operation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**List[WhatIfChange]**](WhatIfChange.md) | List of resource changes predicted by What-If operation. | [optional] 

## Example

```python
from openapi_client.models.what_if_operation_properties import WhatIfOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WhatIfOperationProperties from a JSON string
what_if_operation_properties_instance = WhatIfOperationProperties.from_json(json)
# print the JSON string representation of the object
print(WhatIfOperationProperties.to_json())

# convert the object into a dict
what_if_operation_properties_dict = what_if_operation_properties_instance.to_dict()
# create an instance of WhatIfOperationProperties from a dict
what_if_operation_properties_from_dict = WhatIfOperationProperties.from_dict(what_if_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


