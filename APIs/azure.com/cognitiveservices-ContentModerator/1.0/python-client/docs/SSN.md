# SSN

Detected SSN details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | Index(Location) of the SSN in the input text content. | [optional] 
**text** | **str** | Detected SSN in the input text content. | [optional] 

## Example

```python
from openapi_client.models.ssn import SSN

# TODO update the JSON string below
json = "{}"
# create an instance of SSN from a JSON string
ssn_instance = SSN.from_json(json)
# print the JSON string representation of the object
print(SSN.to_json())

# convert the object into a dict
ssn_dict = ssn_instance.to_dict()
# create an instance of SSN from a dict
ssn_from_dict = SSN.from_dict(ssn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


