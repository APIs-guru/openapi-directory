# Scan

Scan is a structure which describes Cloud Key Visualizer scan information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, object]** | Additional information provided by the implementer. | [optional] 
**end_time** | **str** | The upper bound for when the scan is defined. | [optional] 
**name** | **str** | The unique name of the scan, specific to the Database service implementing this interface. | [optional] 
**scan_data** | [**ScanData**](ScanData.md) |  | [optional] 
**start_time** | **str** | A range of time (inclusive) for when the scan is defined. The lower bound for when the scan is defined. | [optional] 

## Example

```python
from openapi_client.models.scan import Scan

# TODO update the JSON string below
json = "{}"
# create an instance of Scan from a JSON string
scan_instance = Scan.from_json(json)
# print the JSON string representation of the object
print(Scan.to_json())

# convert the object into a dict
scan_dict = scan_instance.to_dict()
# create an instance of Scan from a dict
scan_from_dict = Scan.from_dict(scan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


