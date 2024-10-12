# BinLogCoordinates

Binary log coordinates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin_log_file_name** | **str** | Name of the binary log file for a Cloud SQL instance. | [optional] 
**bin_log_position** | **str** | Position (offset) within the binary log file. | [optional] 
**kind** | **str** | This is always &#x60;sql#binLogCoordinates&#x60;. | [optional] 

## Example

```python
from openapi_client.models.bin_log_coordinates import BinLogCoordinates

# TODO update the JSON string below
json = "{}"
# create an instance of BinLogCoordinates from a JSON string
bin_log_coordinates_instance = BinLogCoordinates.from_json(json)
# print the JSON string representation of the object
print(BinLogCoordinates.to_json())

# convert the object into a dict
bin_log_coordinates_dict = bin_log_coordinates_instance.to_dict()
# create an instance of BinLogCoordinates from a dict
bin_log_coordinates_from_dict = BinLogCoordinates.from_dict(bin_log_coordinates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


