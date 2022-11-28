import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterSnapshot
/** 
 * Detailed information about a cluster snapshot. 
**/
export class DbClusterSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbClusterSnapshotArn?: string;

  @SpeakeasyMetadata()
  dbClusterSnapshotIdentifier?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  percentProgress?: number;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  snapshotCreateTime?: Date;

  @SpeakeasyMetadata()
  snapshotType?: string;

  @SpeakeasyMetadata()
  sourceDbClusterSnapshotArn?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata()
  vpcId?: string;
}
