# WhatIfOperationResult

Result of the What-If operation. Contains a list of predicted changes and a URL link to get to the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CloudErrorError**](CloudErrorError.md) |  | [optional] 
**properties** | [**WhatIfOperationProperties**](WhatIfOperationProperties.md) |  | [optional] 
**status** | **str** | Status of the What-If operation. | [optional] 

## Example

```python
from openapi_client.models.what_if_operation_result import WhatIfOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of WhatIfOperationResult from a JSON string
what_if_operation_result_instance = WhatIfOperationResult.from_json(json)
# print the JSON string representation of the object
print(WhatIfOperationResult.to_json())

# convert the object into a dict
what_if_operation_result_dict = what_if_operation_result_instance.to_dict()
# create an instance of WhatIfOperationResult from a dict
what_if_operation_result_from_dict = WhatIfOperationResult.from_dict(what_if_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


