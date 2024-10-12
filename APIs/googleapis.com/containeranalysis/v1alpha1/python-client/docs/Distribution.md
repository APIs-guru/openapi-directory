# Distribution

This represents a particular channel of distribution for a given package. e.g. Debian's jessie-backports dpkg mirror

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The CPU architecture for which packages in this distribution channel were built | [optional] 
**cpe_uri** | **str** | The cpe_uri in [cpe format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. | [optional] 
**description** | **str** | The distribution channel-specific description of this package. | [optional] 
**latest_version** | [**Version**](Version.md) |  | [optional] 
**maintainer** | **str** | A freeform string denoting the maintainer of this package. | [optional] 
**url** | **str** | The distribution channel-specific homepage for this package. | [optional] 

## Example

```python
from openapi_client.models.distribution import Distribution

# TODO update the JSON string below
json = "{}"
# create an instance of Distribution from a JSON string
distribution_instance = Distribution.from_json(json)
# print the JSON string representation of the object
print(Distribution.to_json())

# convert the object into a dict
distribution_dict = distribution_instance.to_dict()
# create an instance of Distribution from a dict
distribution_from_dict = Distribution.from_dict(distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


