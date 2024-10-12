# Checksum



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** |  Name of the algorithm used to generate the checksum,  as defined in ETSI GS NFV-SOL 004. For example, SHA-256, SHA-512. | 
**hash** | **str** | &#39;String 1 The hexadecimal value of the checksum&#39; | 

## Example

```python
from openapi_client.models.checksum import Checksum

# TODO update the JSON string below
json = "{}"
# create an instance of Checksum from a JSON string
checksum_instance = Checksum.from_json(json)
# print the JSON string representation of the object
print(Checksum.to_json())

# convert the object into a dict
checksum_dict = checksum_instance.to_dict()
# create an instance of Checksum from a dict
checksum_from_dict = Checksum.from_dict(checksum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


