# NameAvailabilityInformation

Data Lake Store account name availability result information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message describing why the Data Lake Store account name is not available, if nameAvailable is false. | [optional] [readonly] 
**name_available** | **bool** | The Boolean value of true or false to indicate whether the Data Lake Store account name is available or not. | [optional] [readonly] 
**reason** | **str** | The reason why the Data Lake Store account name is not available, if nameAvailable is false. | [optional] [readonly] 

## Example

```python
from openapi_client.models.name_availability_information import NameAvailabilityInformation

# TODO update the JSON string below
json = "{}"
# create an instance of NameAvailabilityInformation from a JSON string
name_availability_information_instance = NameAvailabilityInformation.from_json(json)
# print the JSON string representation of the object
print(NameAvailabilityInformation.to_json())

# convert the object into a dict
name_availability_information_dict = name_availability_information_instance.to_dict()
# create an instance of NameAvailabilityInformation from a dict
name_availability_information_from_dict = NameAvailabilityInformation.from_dict(name_availability_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


