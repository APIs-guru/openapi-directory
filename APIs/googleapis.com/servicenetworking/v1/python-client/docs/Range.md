# Range

Represents a found unused range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_cidr_range** | **str** | CIDR range in \&quot;10.x.x.x/y\&quot; format that is within the allocated ranges and currently unused. | [optional] 
**network** | **str** | In the Shared VPC host project, the VPC network that&#39;s peered with the consumer network. For example: &#x60;projects/1234321/global/networks/host-network&#x60; | [optional] 

## Example

```python
from openapi_client.models.range import Range

# TODO update the JSON string below
json = "{}"
# create an instance of Range from a JSON string
range_instance = Range.from_json(json)
# print the JSON string representation of the object
print(Range.to_json())

# convert the object into a dict
range_dict = range_instance.to_dict()
# create an instance of Range from a dict
range_from_dict = Range.from_dict(range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


