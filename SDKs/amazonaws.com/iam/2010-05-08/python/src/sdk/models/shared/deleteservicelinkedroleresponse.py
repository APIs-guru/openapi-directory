from dataclasses import dataclass, field



@dataclass
class DeleteServiceLinkedRoleResponse:
    deletion_task_id: str = field()
    
