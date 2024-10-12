# BandedRange

A banded (alternating colors) range in a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banded_range_id** | **int** | The ID of the banded range. | [optional] 
**column_properties** | [**BandingProperties**](BandingProperties.md) |  | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**row_properties** | [**BandingProperties**](BandingProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.banded_range import BandedRange

# TODO update the JSON string below
json = "{}"
# create an instance of BandedRange from a JSON string
banded_range_instance = BandedRange.from_json(json)
# print the JSON string representation of the object
print(BandedRange.to_json())

# convert the object into a dict
banded_range_dict = banded_range_instance.to_dict()
# create an instance of BandedRange from a dict
banded_range_from_dict = BandedRange.from_dict(banded_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


