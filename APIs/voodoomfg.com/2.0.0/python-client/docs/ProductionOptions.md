# ProductionOptions

Optional extra parameters for the production of this model. There may be additional charges for each enabled optional service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orientation** | **bool** | Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you&#39;re not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation. | [optional] 

## Example

```python
from openapi_client.models.production_options import ProductionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ProductionOptions from a JSON string
production_options_instance = ProductionOptions.from_json(json)
# print the JSON string representation of the object
print(ProductionOptions.to_json())

# convert the object into a dict
production_options_dict = production_options_instance.to_dict()
# create an instance of ProductionOptions from a dict
production_options_from_dict = ProductionOptions.from_dict(production_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


