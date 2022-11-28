import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CopyBackupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyTags" })
  copyTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceBackupId" })
  sourceBackupId: string;

  @SpeakeasyMetadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
