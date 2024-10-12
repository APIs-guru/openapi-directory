# ReturnAddress

Specifies the return address information for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The city name to use when returning the drives. | 
**country_or_region** | **str** | The country or region to use when returning the drives.  | 
**email** | **str** | Email address of the recipient of the returned drives. | 
**phone** | **str** | Phone number of the recipient of the returned drives. | 
**postal_code** | **str** | The postal code to use when returning the drives. | 
**recipient_name** | **str** | The name of the recipient who will receive the hard drives when they are returned.  | 
**state_or_province** | **str** | The state or province to use when returning the drives. | [optional] 
**street_address1** | **str** | The first line of the street address to use when returning the drives.  | 
**street_address2** | **str** | The second line of the street address to use when returning the drives.  | [optional] 

## Example

```python
from openapi_client.models.return_address import ReturnAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnAddress from a JSON string
return_address_instance = ReturnAddress.from_json(json)
# print the JSON string representation of the object
print(ReturnAddress.to_json())

# convert the object into a dict
return_address_dict = return_address_instance.to_dict()
# create an instance of ReturnAddress from a dict
return_address_from_dict = ReturnAddress.from_dict(return_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


