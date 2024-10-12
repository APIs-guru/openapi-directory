# OSDescription

A message describing the VM's OS. Including OS, Publisher, Offer and Plan if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | OS offer. | [optional] 
**plan** | **str** | OS plan. | [optional] 
**publisher** | **str** | OS publisher. | [optional] 
**type** | **str** | OS type. | [optional] 

## Example

```python
from openapi_client.models.os_description import OSDescription

# TODO update the JSON string below
json = "{}"
# create an instance of OSDescription from a JSON string
os_description_instance = OSDescription.from_json(json)
# print the JSON string representation of the object
print(OSDescription.to_json())

# convert the object into a dict
os_description_dict = os_description_instance.to_dict()
# create an instance of OSDescription from a dict
os_description_from_dict = OSDescription.from_dict(os_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


