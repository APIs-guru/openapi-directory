# XPSDataErrors

Different types of errors and the stats associatesd with each error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of records having errors associated with the enum. | [optional] 
**error_type** | **str** | Type of the error. | [optional] 

## Example

```python
from openapi_client.models.xps_data_errors import XPSDataErrors

# TODO update the JSON string below
json = "{}"
# create an instance of XPSDataErrors from a JSON string
xps_data_errors_instance = XPSDataErrors.from_json(json)
# print the JSON string representation of the object
print(XPSDataErrors.to_json())

# convert the object into a dict
xps_data_errors_dict = xps_data_errors_instance.to_dict()
# create an instance of XPSDataErrors from a dict
xps_data_errors_from_dict = XPSDataErrors.from_dict(xps_data_errors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


