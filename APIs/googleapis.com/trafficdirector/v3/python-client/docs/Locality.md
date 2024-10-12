# Locality

Identifies location of where either Envoy runs or where upstream hosts run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | **str** | Region this :ref:&#x60;zone &#x60; belongs to. | [optional] 
**sub_zone** | **str** | When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently. | [optional] 
**zone** | **str** | Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:&#x60;zone data &#x60;, either in this message or via :option:&#x60;--service-zone&#x60;. The meaning of zone is context dependent, e.g. &#x60;Availability Zone (AZ) &#x60;_ on AWS, &#x60;Zone &#x60;_ on GCP, etc. | [optional] 

## Example

```python
from openapi_client.models.locality import Locality

# TODO update the JSON string below
json = "{}"
# create an instance of Locality from a JSON string
locality_instance = Locality.from_json(json)
# print the JSON string representation of the object
print(Locality.to_json())

# convert the object into a dict
locality_dict = locality_instance.to_dict()
# create an instance of Locality from a dict
locality_from_dict = Locality.from_dict(locality_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


