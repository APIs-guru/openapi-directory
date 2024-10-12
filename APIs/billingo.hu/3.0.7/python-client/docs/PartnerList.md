# PartnerList

A object with a data property that contains an array of up to limit partners. Each entry in the array is a separate partner object. If no more partners are available, the resulting array will be empty.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** |  | [optional] 
**data** | [**List[Partner]**](Partner.md) |  | [optional] 
**last_page** | **int** |  | [optional] 
**next_page_url** | **str** |  | [optional] 
**per_page** | **int** |  | [optional] 
**prev_page_url** | **str** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.partner_list import PartnerList

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerList from a JSON string
partner_list_instance = PartnerList.from_json(json)
# print the JSON string representation of the object
print(PartnerList.to_json())

# convert the object into a dict
partner_list_dict = partner_list_instance.to_dict()
# create an instance of PartnerList from a dict
partner_list_from_dict = PartnerList.from_dict(partner_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


