import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticGpuAssociation
/** 
 * Describes the association between an instance and an Elastic Graphics accelerator.
**/
export class ElasticGpuAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  elasticGpuAssociationId?: string;

  @SpeakeasyMetadata()
  elasticGpuAssociationState?: string;

  @SpeakeasyMetadata()
  elasticGpuAssociationTime?: string;

  @SpeakeasyMetadata()
  elasticGpuId?: string;
}
