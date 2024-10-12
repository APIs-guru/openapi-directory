# PosStore

Store resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcid_category** | **List[str]** | The business type of the store. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#posStore&#x60;\&quot; | [optional] 
**phone_number** | **str** | The store phone number. | [optional] 
**place_id** | **str** | The Google Place Id of the store location. | [optional] 
**store_address** | **str** | Required. The street address of the store. | [optional] 
**store_code** | **str** | Required. A store identifier that is unique for the given merchant. | [optional] 
**store_name** | **str** | The merchant or store name. | [optional] 
**website_url** | **str** | The website url for the store or merchant. | [optional] 

## Example

```python
from openapi_client.models.pos_store import PosStore

# TODO update the JSON string below
json = "{}"
# create an instance of PosStore from a JSON string
pos_store_instance = PosStore.from_json(json)
# print the JSON string representation of the object
print(PosStore.to_json())

# convert the object into a dict
pos_store_dict = pos_store_instance.to_dict()
# create an instance of PosStore from a dict
pos_store_from_dict = PosStore.from_dict(pos_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


