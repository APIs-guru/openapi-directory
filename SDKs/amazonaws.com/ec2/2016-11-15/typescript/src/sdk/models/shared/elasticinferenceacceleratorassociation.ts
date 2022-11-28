import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticInferenceAcceleratorAssociation
/** 
 *  Describes the association between an instance and an elastic inference accelerator. 
**/
export class ElasticInferenceAcceleratorAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  elasticInferenceAcceleratorArn?: string;

  @SpeakeasyMetadata()
  elasticInferenceAcceleratorAssociationId?: string;

  @SpeakeasyMetadata()
  elasticInferenceAcceleratorAssociationState?: string;

  @SpeakeasyMetadata()
  elasticInferenceAcceleratorAssociationTime?: Date;
}
