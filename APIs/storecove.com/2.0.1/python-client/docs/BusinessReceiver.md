# BusinessReceiver

The business receiver of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**legal** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 
**routing** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 
**tax** | [**CountrySpecificationIdentifier**](CountrySpecificationIdentifier.md) |  | [optional] 

## Example

```python
from openapi_client.models.business_receiver import BusinessReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessReceiver from a JSON string
business_receiver_instance = BusinessReceiver.from_json(json)
# print the JSON string representation of the object
print(BusinessReceiver.to_json())

# convert the object into a dict
business_receiver_dict = business_receiver_instance.to_dict()
# create an instance of BusinessReceiver from a dict
business_receiver_from_dict = BusinessReceiver.from_dict(business_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


