# ShareholderDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**all_info** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**nationality** | **str** |  | [optional] 
**nominal_value** | **str** |  | [optional] 
**percentage** | **str** |  | [optional] 
**share_class** | **str** |  | [optional] 
**share_count** | **int** |  | [optional] 
**share_type** | **str** |  | [optional] 
**shareholder_type** | **str** |  | [optional] 
**total_share_count** | **int** |  | [optional] 
**total_share_value** | **int** |  | [optional] 
**total_shares** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.shareholder_details import ShareholderDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ShareholderDetails from a JSON string
shareholder_details_instance = ShareholderDetails.from_json(json)
# print the JSON string representation of the object
print(ShareholderDetails.to_json())

# convert the object into a dict
shareholder_details_dict = shareholder_details_instance.to_dict()
# create an instance of ShareholderDetails from a dict
shareholder_details_from_dict = ShareholderDetails.from_dict(shareholder_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


