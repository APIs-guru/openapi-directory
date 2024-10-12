# MercantileEnquiry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent** | **str** |  | [optional] 
**company** | **str** |  | [optional] 
**created_date** | **datetime** |  | [optional] 
**var_date** | **datetime** |  | [optional] 
**phone** | **str** |  | [optional] 
**registered_date** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.mercantile_enquiry import MercantileEnquiry

# TODO update the JSON string below
json = "{}"
# create an instance of MercantileEnquiry from a JSON string
mercantile_enquiry_instance = MercantileEnquiry.from_json(json)
# print the JSON string representation of the object
print(MercantileEnquiry.to_json())

# convert the object into a dict
mercantile_enquiry_dict = mercantile_enquiry_instance.to_dict()
# create an instance of MercantileEnquiry from a dict
mercantile_enquiry_from_dict = MercantileEnquiry.from_dict(mercantile_enquiry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


