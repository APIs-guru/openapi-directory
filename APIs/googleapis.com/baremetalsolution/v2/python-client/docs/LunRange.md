# LunRange

A LUN(Logical Unit Number) range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** | Number of LUNs to create. | [optional] 
**size_gb** | **int** | The requested size of each LUN, in GB. | [optional] 

## Example

```python
from openapi_client.models.lun_range import LunRange

# TODO update the JSON string below
json = "{}"
# create an instance of LunRange from a JSON string
lun_range_instance = LunRange.from_json(json)
# print the JSON string representation of the object
print(LunRange.to_json())

# convert the object into a dict
lun_range_dict = lun_range_instance.to_dict()
# create an instance of LunRange from a dict
lun_range_from_dict = LunRange.from_dict(lun_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


