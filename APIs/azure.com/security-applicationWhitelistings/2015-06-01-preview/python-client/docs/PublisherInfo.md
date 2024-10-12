# PublisherInfo

Represents the publisher information of a process/rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_name** | **str** | The \&quot;OriginalName\&quot; field taken from the file&#39;s version resource | [optional] 
**product_name** | **str** | The product name taken from the file&#39;s version resource | [optional] 
**publisher_name** | **str** | The Subject field of the x.509 certificate used to sign the code, using the following fields -  O &#x3D; Organization, L &#x3D; Locality, S &#x3D; State or Province, and C &#x3D; Country | [optional] 
**version** | **str** | The binary file version taken from the file&#39;s version resource | [optional] 

## Example

```python
from openapi_client.models.publisher_info import PublisherInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherInfo from a JSON string
publisher_info_instance = PublisherInfo.from_json(json)
# print the JSON string representation of the object
print(PublisherInfo.to_json())

# convert the object into a dict
publisher_info_dict = publisher_info_instance.to_dict()
# create an instance of PublisherInfo from a dict
publisher_info_from_dict = PublisherInfo.from_dict(publisher_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


