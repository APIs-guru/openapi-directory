# PropertyBatchOperationKind

The kind of property batch operation, determined by the operation to be performed. The following are the possible values.  - Invalid - Indicates the property operation is invalid. All Service Fabric enumerations have the invalid type. The value is zero. - Put - The operation will create or edit a property. The value is 1. - Get - The operation will get a property. The value is 2. - CheckExists - The operation will check that a property exists or doesn't exists, depending on the provided value. The value is 3. - CheckSequence - The operation will ensure that the sequence number is equal to the provided value. The value is 4. - Delete - The operation will delete a property. The value is 5. - CheckValue - The operation will ensure that the value of a property is equal to the provided value. The value is 7. 

## Enum

* `INVALID` (value: `'Invalid'`)

* `PUT` (value: `'Put'`)

* `GET` (value: `'Get'`)

* `CHECKEXISTS` (value: `'CheckExists'`)

* `CHECKSEQUENCE` (value: `'CheckSequence'`)

* `DELETE` (value: `'Delete'`)

* `CHECKVALUE` (value: `'CheckValue'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


