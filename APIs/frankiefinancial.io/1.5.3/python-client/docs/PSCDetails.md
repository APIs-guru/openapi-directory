# PSCDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**ceased_on** | **str** |  | [optional] 
**country_of_residence** | **str** |  | [optional] 
**dob_day** | **int** |  | [optional] 
**dob_month** | **int** |  | [optional] 
**dob_year** | **int** |  | [optional] 
**kind** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**nationality** | **str** |  | [optional] 
**nature_of_control** | [**ArrayOfString**](ArrayOfString.md) |  | [optional] 
**notified_on** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.psc_details import PSCDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PSCDetails from a JSON string
psc_details_instance = PSCDetails.from_json(json)
# print the JSON string representation of the object
print(PSCDetails.to_json())

# convert the object into a dict
psc_details_dict = psc_details_instance.to_dict()
# create an instance of PSCDetails from a dict
psc_details_from_dict = PSCDetails.from_dict(psc_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


