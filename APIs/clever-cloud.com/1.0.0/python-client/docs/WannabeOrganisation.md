# WannabeOrganisation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vat** | **str** |  | [optional] 
**address** | **str** | The address of the organisation. | [optional] 
**city** | **str** | The city of the organisation. | [optional] 
**company** | **str** | The company&#39;s name of the organisation. | [optional] 
**country** | **str** | The country of the organisation. | [optional] 
**description** | **str** | The description of the organisation. | 
**name** | **str** | The name of the organisation. | 
**zipcode** | **str** | The zipcode of the city&#39;s organisation. | [optional] 

## Example

```python
from openapi_client.models.wannabe_organisation import WannabeOrganisation

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeOrganisation from a JSON string
wannabe_organisation_instance = WannabeOrganisation.from_json(json)
# print the JSON string representation of the object
print(WannabeOrganisation.to_json())

# convert the object into a dict
wannabe_organisation_dict = wannabe_organisation_instance.to_dict()
# create an instance of WannabeOrganisation from a dict
wannabe_organisation_from_dict = WannabeOrganisation.from_dict(wannabe_organisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


