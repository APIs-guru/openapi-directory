# Partner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company** | **str** |  | 
**contacts** | [**List[Contact]**](Contact.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**icon** | [**File**](File.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**listed** | **str** |  | [optional] 
**twitter** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**website** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.partner import Partner

# TODO update the JSON string below
json = "{}"
# create an instance of Partner from a JSON string
partner_instance = Partner.from_json(json)
# print the JSON string representation of the object
print(Partner.to_json())

# convert the object into a dict
partner_dict = partner_instance.to_dict()
# create an instance of Partner from a dict
partner_from_dict = Partner.from_dict(partner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


