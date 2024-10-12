# IpTag

Contains the IpTag associated with the object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_tag_type** | **str** | Gets or sets the ipTag type: Example FirstPartyUsage. | [optional] 
**tag** | **str** | Gets or sets value of the IpTag associated with the public IP. Example SQL, Storage etc | [optional] 

## Example

```python
from openapi_client.models.ip_tag import IpTag

# TODO update the JSON string below
json = "{}"
# create an instance of IpTag from a JSON string
ip_tag_instance = IpTag.from_json(json)
# print the JSON string representation of the object
print(IpTag.to_json())

# convert the object into a dict
ip_tag_dict = ip_tag_instance.to_dict()
# create an instance of IpTag from a dict
ip_tag_from_dict = IpTag.from_dict(ip_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


